import { ArrowRightIcon } from 'assets';
import { ButtonHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = ({
    label,
    onClick = () => null,
    disabled = false,
    ...rest
}: IButtonProps) => {
    return (
        <StyledButton onClick={onClick} disabled={disabled} {...rest}>
            <span>{label}</span>
            <ArrowRightIcon />
        </StyledButton>
    );
};

const StyledButton = tw.button`bg-primary text-dark px-5 py-2 rounded-sm disabled:opacity-50 text-sm font-semibold transform transition-transform hover:-translate-y-0.5 active:bg-primary/90 flex justify-between items-center space-x-2`;
