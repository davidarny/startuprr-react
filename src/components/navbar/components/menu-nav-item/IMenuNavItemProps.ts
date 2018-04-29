export interface IMenuNavItemProps {
    isLink?: boolean;
    to?: string;
    title: string;

    onClick?(): void;
}
