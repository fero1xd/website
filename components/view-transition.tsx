"use client";

import { ComponentProps, ViewTransition } from "react";

export default function MyViewTransition(
  props: ComponentProps<typeof ViewTransition>
) {
  return <ViewTransition {...props} />;
}
