export const useIconColor = (color?: DesignSystemColors) => {
    if (!color) {
        return 'var(--color-secondary)';
    }

    return `var(--color-${color})`;
};
