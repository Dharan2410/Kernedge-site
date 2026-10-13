export const K_PATH = "M293 284H447V548L535 464H803L680 589H572L518 643H670L981 952H725L478 704L293 900Z";
export const SLAB_PATH = "M710 284H981L851 414H581Z";
export const MARK_VIEWBOX = "270 260 740 710";

export function KMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox={MARK_VIEWBOX} aria-hidden="true">
      <path fill="#F3EEDF" d={K_PATH} />
      <path fill="#FFC20E" d={SLAB_PATH} />
    </svg>
  );
}
