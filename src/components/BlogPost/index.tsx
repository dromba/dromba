import * as React from 'react';
import { css } from 'emotion';
import Paragraph from '../core/Paragraph';
import { ParagraphSize } from '../../enums/ParagraphSize';
import { H5 } from '../core/Heading';

export interface IBlogPostProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  url: string;
}

const blogPostCss = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 64px;
`;

const thumbnailCss = css`
  height: 96px;
  width: 96px;
  min-width: 96px;
  margin-right: 32px;
`;

const textWrapperCss = css`
  display: flex;
  flex-direction: column;
`;

const BlogPost: React.FC<IBlogPostProps> = (props: IBlogPostProps) => {
  const { title, subtitle, thumbnail, url } = props;

  return (
    <a
      className={blogPostCss}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={thumbnail} className={thumbnailCss} alt="blog-post" />
      <div className={textWrapperCss}>
        <H5>{title}</H5>
        <Paragraph size={ParagraphSize.Medium}>{subtitle}</Paragraph>
      </div>
    </a>
  );
};

export default BlogPost;