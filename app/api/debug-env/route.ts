export async function GET() {
  return Response.json({
    hasWhiteEmail: !!process.env.NEXT_PUBLIC_WHITE_EMAIL,
    whiteEmailValue: process.env.NEXT_PUBLIC_WHITE_EMAIL,
  });
} 