export interface NavLink {
  readonly label: string;
  readonly href: `#${string}`;
}

/** Which drawn illustration a project shows (components/ui/Illustration.tsx). */
export type Art = 'video' | 'rooms' | 'chat' | 'code' | 'dashboard' | 'phone' | 'inbox' | 'agents' | 'store';

export interface Step {
  readonly title: string;
  readonly text: string;
  readonly art: Art;
  readonly alt: string;
}

export interface Fact {
  readonly label: string;
  readonly value: string;
}

export interface Project {
  readonly id: string;
  readonly heading: string;
  readonly text: string;
  readonly facts: readonly Fact[];
  readonly href: string;
  readonly linkLabel: string;
  readonly art: Art;
  readonly alt: string;
  /** `split`: words beside the picture. `wide`: words above a full-width picture. */
  readonly layout: 'split' | 'wide';
}

export interface Tool {
  readonly id: string;
  readonly name: string;
  readonly width: number;
  readonly height: number;
}
