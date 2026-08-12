import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const BRAIN_IMAGE_MAP: Record<string, string> = {
  rishikesh: "C:\\Users\\iammo\\.gemini\\antigravity-ide\\brain\\87e977a2-5122-47ad-a32e-10de1c21233e\\rishikesh_hd_destination_1786507829351.png",
  goa: "C:\\Users\\iammo\\.gemini\\antigravity-ide\\brain\\87e977a2-5122-47ad-a32e-10de1c21233e\\goa_hd_destination_1786508523036.png",
  manali: "C:\\Users\\iammo\\.gemini\\antigravity-ide\\brain\\87e977a2-5122-47ad-a32e-10de1c21233e\\manali_hd_destination_1786508549588.png",
  kashmir: "C:\\Users\\iammo\\.gemini\\antigravity-ide\\brain\\87e977a2-5122-47ad-a32e-10de1c21233e\\kashmir_hd_destination_1786508577688.png",
  jaipur: "C:\\Users\\iammo\\.gemini\\antigravity-ide\\brain\\87e977a2-5122-47ad-a32e-10de1c21233e\\jaipur_hd_destination_1786508631316.png",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const normalizedId = id.toLowerCase().replace(".png", "");

  // 1. Primary path: relative public directory inside workspace (Live Hostinger ready)
  const publicFilePath = path.join(process.cwd(), "public", "Blog", "slider", `${normalizedId}.png`);

  let targetPath: string | null = null;

  if (fs.existsSync(publicFilePath)) {
    targetPath = publicFilePath;
  } else if (BRAIN_IMAGE_MAP[normalizedId] && fs.existsSync(BRAIN_IMAGE_MAP[normalizedId])) {
    targetPath = BRAIN_IMAGE_MAP[normalizedId];
  }

  if (!targetPath) {
    return new NextResponse("Image not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(targetPath);
  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
