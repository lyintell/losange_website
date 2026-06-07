import { readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function normalizeText(value) {
  return String(value ?? "").trim();
}

function normalizePhone(value) {
  return normalizeText(value).replace(/[\s().-]/g, "");
}

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function jsonResponse(message, status) {
  return Response.json({ message }, { status });
}

export async function POST(request) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return jsonResponse("Configuration serveur incomplète.", 500);
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse("Requête invalide.", 400);
  }

  const identifier = normalizeText(payload.identifier);
  const phone = normalizePhone(payload.phone);

  if (!identifier || !phone) {
    return jsonResponse("Identifiant ou téléphone invalide.", 400);
  }

  const { data, error } = await supabase
    .from("profils")
    .select("identifiant, telephone_1, date_premier_login")
    .eq("identifiant", identifier)
    .is("date_premier_login", null)
    .maybeSingle();

  if (error) {
    return jsonResponse("Impossible de vérifier les informations.", 500);
  }

  if (!data || normalizePhone(data.telephone_1) !== phone) {
    return jsonResponse("Informations invalides ou accès déjà utilisé.", 403);
  }

  const apkPath = path.join(process.cwd(), "prompts", "app_downloads", "losange.apk");

  try {
    const apk = await readFile(apkPath);

    return new Response(apk, {
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": 'attachment; filename="losange.apk"',
        "Content-Length": String(apk.byteLength),
      },
    });
  } catch {
    return new Response("Fichier de téléchargement introuvable.", { status: 404 });
  }
}

export function GET() {
  return jsonResponse("Méthode non autorisée.", 405);
}