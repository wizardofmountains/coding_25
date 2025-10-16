import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "Image URL is required" },
        { status: 400 }
      );
    }

    // Fetch the image from the external URL (server-side, bypasses CORS)
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());

    // Return the image data with proper headers
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": blob.type || "image/png",
        "Content-Disposition": `attachment; filename="ai-art-${Date.now()}.png"`,
      },
    });
  } catch (error: any) {
    console.error("Error downloading image:", error);
    return NextResponse.json(
      { error: error.message || "Failed to download image" },
      { status: 500 }
    );
  }
}
