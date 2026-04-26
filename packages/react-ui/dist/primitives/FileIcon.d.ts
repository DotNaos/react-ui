import { type IconProps } from './Icon';
export interface FileIconProps extends Omit<IconProps, 'name' | 'color' | 'size'> {
    filename: string;
    size?: number | string;
    grayscale?: boolean;
}
/**
 * FileIcon primitive using @react-symbols/icons
 */
export declare function FileIcon({ filename, className, style, size, grayscale, ...props }: FileIconProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FileIcon.d.ts.map