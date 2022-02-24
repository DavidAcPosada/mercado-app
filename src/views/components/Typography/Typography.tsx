import { FC } from 'react';
import { TypographyProps } from './Typography.interface';
import { StyledTypography } from './Typography.styles';

const Typography: FC<TypographyProps> = ({
  as,
  variant,
  children,
  className,
  ...props
}): JSX.Element => {
  const getTag = () => {
    const tags = {
      subtitle: 'h6',
      body: 'p',
      caption: 'p',
      underline: 'span',
    };
    return tags[variant as keyof typeof tags] || variant;
  };

  const tag = !as ? getTag() : as;
  return (
    <StyledTypography
      variant={variant}
      as={tag}
      className={className}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
