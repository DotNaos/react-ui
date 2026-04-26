import { FileIcon as PrimitiveFileIcon } from '@react-symbols/icons/utils';
import { cn } from "@dotnaos/design-system/lib/utils";
import { type IconProps } from './Icon';

export interface FileIconProps extends Omit<
    IconProps,
    'name' | 'color' | 'size'
> {
    filename: string;
    size?: number | string; // Override helper size
    grayscale?: boolean;
}

/**
 * FileIcon primitive using @react-symbols/icons
 */
export function FileIcon({
    filename,
    className,
    style,
    size = 16,
    grayscale,
    ...props
}: FileIconProps) {
    // Map size tokens to pixel values if needed, otherwise pass through
    const pixelSize =
        typeof size === 'string'
            ? size === 's'
                ? 16
                : size === 'm'
                  ? 20
                  : size === 'l'
                    ? 24
                    : 20
            : size;

    return (
        <PrimitiveFileIcon
            fileName={filename}
            autoAssign={true}
            width={pixelSize}
            height={pixelSize}
            className={cn(
                'shrink-0',
                grayscale && 'grayscale opacity-80',
                className
            )} // Ensure icon doesn't shrink in flex containers
            style={style}
            {...(props as any)}
        />
    );
}
