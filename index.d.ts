import type { SvelteComponent } from 'svelte';
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
export declare type RawUser = BaseUser & {
    roles: string;
};
export declare type User = BaseUser & {
    roles: Role[];
    imageId?: string;
};
export declare enum Subscription {
    Pro = "Pro",
    Hacker = "Hacker"
}
export declare enum Roles {
    Admin = "1",
    Verified = "2",
    EarlyAccess = "3"
}
export interface Role {
    id: string;
    key?: string;
    name?: string | null;
    color?: Variant;
    desc?: string | null;
}
export declare enum Align {
    Left = "left",
    Right = "right",
    Center = "center",
    Justify = "justify"
}
export declare type Variant = 'primary' | 'positive' | 'negative' | 'warning' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'blurple' | 'purple' | 'magenta' | 'pink' | 'grey' | 'outlined' | 'higher';
export declare type IconSize = 6 | 12 | 16 | 20 | 24 | 28 | 32 | 48 | 96;
export interface Toast {
    text: string;
    variant: Variant;
    time?: number;
    id?: string;
}
export declare type ToastEvent = CustomEvent<Toast>;
export declare type SelectOption = string | {
    value: string;
    disabled?: boolean;
    selected?: boolean;
    href?: string;
};
export declare type SelectOptions = {
    [key: string]: SelectOption;
};
export declare type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
};
export declare type Resizable = boolean | 'none' | 'horizontal' | 'vertical' | 'both';
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
export declare type ModalEventDetail = Modal | 'createReplModal';
export declare type ModalEvent = CustomEvent<ModalEventDetail>;
export interface SelectEventDetails {
    value: string | null;
}
export declare type SelectEvent = CustomEvent<SelectEventDetails>;
export interface CheckboxEventDetails {
    checked: boolean;
    target: HTMLInputElement;
}
export declare type CheckboxEvent = CustomEvent<CheckboxEventDetails>;
export declare type Autocomplete = 'on' | 'off' | 'name' | 'honorific-prefix' | 'given-name' | 'additional-name' | 'family-name' | 'honorific-suffix' | 'nickname' | 'username' | 'new-password' | 'current-password' | 'one-time-code' | 'organization-title' | 'organization' | 'street-address' | 'address-line1' | 'address-line2' | 'address-line3' | 'address-level4' | 'address-level3' | 'address-level2' | 'address-level1' | 'country' | 'country-name' | 'postal-code' | 'cc-name' | 'cc-given-name' | 'cc-additional-name' | 'cc-family-name' | 'cc-number' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year' | 'cc-csc' | 'cc-type' | 'transaction-currency' | 'transaction-amount' | 'language' | 'bday' | 'bday-day' | 'bday-month' | 'bday-year' | 'sex' | 'url' | 'photo';
export declare type ButtonType = 'button' | 'submit' | 'reset';
export {};
