// Loader timeline in seconds.
export const T = {
  fade: 0.4,     // ball fades in at the top
  fall: 0.55,    // ball falls to the centre
  bounce: 0.5,   // single bounce at the centre
  hop: 0.42,     // each random hop
  hops: 4,       // random hops (the last one lands on the yellow part of the K)
  splash: 0.5,   // yellow splash fills the K's yellow slab
  fadeK: 0.6,    // rest of the K fades in
  hold: 0.35,    // pause on the finished K
  collapse: 0.8, // loader slides up into the nav bar
};

export const LAND_AT = T.fade + T.fall + T.bounce + T.hop * T.hops;
export const COLLAPSE_AT = LAND_AT + 0.15 + T.fadeK + T.hold;
export const END_AT = COLLAPSE_AT + T.collapse;
/** Hero text starts just after the collapse begins. */
export const REVEAL_AT = COLLAPSE_AT + 0.15;