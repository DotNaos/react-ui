import { jsx as _jsx } from "react/jsx-runtime";
import { FileIcon as PrimitiveFileIcon } from '@react-symbols/icons/utils';
import { cn } from '../lib/utils';
/**
 * FileIcon primitive using @react-symbols/icons
 */
export function FileIcon({ filename, className, style, size = 16, grayscale, ...props }) {
    // Map size tokens to pixel values if needed, otherwise pass through
    const pixelSize = typeof size === 'string'
        ? size === 's'
            ? 16
            : size === 'm'
                ? 20
                : size === 'l'
                    ? 24
                    : 20
        : size;
    return (_jsx(PrimitiveFileIcon, { fileName: filename, autoAssign: true, width: pixelSize, height: pixelSize, className: cn('shrink-0', grayscale && 'grayscale opacity-80', className), style: style, ...props }));
}
