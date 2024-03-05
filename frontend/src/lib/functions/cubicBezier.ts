import type { Point } from '$lib/types/helpers';

// for 2 points with 2 control point
export function cubicBezier2(
  ctx: CanvasRenderingContext2D,
  start: Point,
  controlPoint1: Point,
  controlPoint2: Point,
  end: Point,
  segments: number
): void {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);

  for (let i = 1; i <= segments; i++) {
    const t = i / segments;
    const x = cubicBezierInterpolation4(start.x, controlPoint1.x, controlPoint2.x, end.x, t);
    const y = cubicBezierInterpolation4(start.y, controlPoint1.y, controlPoint2.y, end.y, t);
    ctx.lineTo(x, y);
  }

  ctx.stroke();
}

function cubicBezierInterpolation4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  t: number
): number {
  return (
    Math.pow(1 - t, 3) * p0 +
    3 * Math.pow(1 - t, 2) * t * p1 +
    3 * (1 - t) * Math.pow(t, 2) * p2 +
    Math.pow(t, 3) * p3
  );
}

// for 2 points with 1 control point
export function cubicBezier(
  ctx: CanvasRenderingContext2D,
  start: Point,
  controlPoint: Point,
  end: Point,
  segments: number
): void {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);

  for (let i = 1; i <= segments; i++) {
    const t = i / segments;
    const x = cubicBezierInterpolation(start.x, controlPoint.x, end.x, t);
    const y = cubicBezierInterpolation(start.y, controlPoint.y, end.y, t);
    ctx.lineTo(x, y);
  }

  ctx.stroke();
}

function cubicBezierInterpolation(p0: number, p1: number, p2: number, t: number): number {
  return Math.pow(1 - t, 2) * p0 + 2 * (1 - t) * t * p1 + Math.pow(t, 2) * p2;
}
