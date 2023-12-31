import type { ComponentProps, SvelteComponent } from 'svelte';

import type Button from '@replit-svelte/ui/Button.svelte';
import type Pill from '@replit-svelte/ui/Pill.svelte';

export interface Repl {
  id: string;
  author: User;

  title: string;
  slug: string;
  description?: string;
  icon?: string;
  language?: string;

  isPrivate?: boolean;
  isAlwaysOn?: boolean;
  boost?: number;

  likes?: number;
  comments?: number;
  runs?: number;
  forks?: number;

  tags?: String[];
}

interface BaseUser {
  id?: string;
  created_at?: Date;
  username?: string;
  displayName?: string;
  image?: string;
  bio?: string;
  url?: string;
  cycles?: number;

  subscription?: Subscription;

  repls?: Repl[];
}

export type RawUser = BaseUser & {
  roles: string;
};

export type User = BaseUser & {
  roles: Role[];
  imageId?: string;
};

export enum Subscription {
  Pro = 'Pro',
  Hacker = 'Hacker'
}

export enum Roles {
  Admin = '1',
  Verified = '2',
  EarlyAccess = '3'
}

export interface Role {
  id: string;
  key?: string;
  name?: string | null;
  color?: Variant;
  desc?: string | null;
}

export enum Align {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify'
}

export type Variant =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'blurple'
  | 'purple'
  | 'magenta'
  | 'pink'
  | 'grey'
  | 'outlined'
  | 'higher';

export const heights = [
  'root',
  'default',
  'higher',
  'highest',
  'overlay'
] as const;
export type Height = (typeof heights)[number];

export const strengths = [
  'dimmest',
  'dimmer',
  'default',
  'stronger',
  'strongest'
] as const;
export type Strength = (typeof strengths)[number];

export type IconSize = 6 | 12 | 16 | 20 | 24 | 28 | 32 | 48 | 96;

export interface Toast {
  text: string;
  variant: Variant;
  time?: number;
  id?: string;
}

export type ToastEvent = CustomEvent<Toast>;

export type SelectOption = {
  disabled?: boolean;
  title: string;
  value: string;
  href?: string;
};

export type SelectOptionInternal = SelectOption & {
  hover?: boolean;
};

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

export type Resizable = boolean | 'none' | 'horizontal' | 'vertical' | 'both';

export interface Modal {
  title?: string;
  text: string;
  buttons?: ModalButton[];
}

export interface ModalButton {
  text?: string;
  icon?: typeof SvelteComponent;
  action?: () => void;
  variant?: Variant | '';
}

export type ModalEventDetail = Modal | 'createReplModal';

export type ModalEvent = CustomEvent<ModalEventDetail>;

export interface SelectEventDetails {
  value: string | null;
}

export type SelectEvent = CustomEvent<SelectEventDetails>;

export interface CheckboxEventDetails {
  checked: boolean;
  target: HTMLInputElement;
}

export type CheckboxEvent = CustomEvent<CheckboxEventDetails>;

export type Autocomplete =
  | 'on'
  | 'off'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'additional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'url'
  | 'photo';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface File {
  name: string;
  contents?: string | File[];
  folder?: boolean;
  expanded?: boolean;
}

export interface SidebarButton {
  adminOnly?: boolean;
  icon?: typeof SvelteComponent;
  title: string;
  onClick?: () => void;
  variant?: ComponentProps<Button>['variant'];
}

export interface SidebarLink {
  adminOnly?: boolean;
  icon?: typeof SvelteComponent;
  href: string;
  title: string;
  pill?: ComponentProps<Pill>;
}

export type SidebarLinkSimple = Omit<SidebarLink, 'icon' | 'pill'>;
