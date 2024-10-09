/* eslint-disable no-use-before-define */

export type MarkedToken = (
    Tokens.Space
  | Tokens.Code
  | Tokens.Heading
  | Tokens.Table
  | Tokens.Hr
  | Tokens.Blockquote
  | Tokens.List
  | Tokens.ListItem
  | Tokens.Paragraph
  | Tokens.HTML
  | Tokens.Text
  | Tokens.Def
  | Tokens.Escape
  | Tokens.Tag
  | Tokens.Image
  | Tokens.Link
  | Tokens.Strong
  | Tokens.Em
  | Tokens.Codespan
  | Tokens.Br
  | Tokens.Del);

export type Token = (
    MarkedToken
  | Tokens.Generic);

export namespace Tokens {
  export interface Space {
    type: 'space';
    raw: string;
  }

  export interface Code {
    type: 'code';
    raw: string;
    codeBlockStyle?: 'indented' | undefined;
    lang?: string | undefined;
    text: string;
    escaped?: boolean;
  }

  export interface Heading {
    type: 'heading';
    raw: string;
    depth: number;
    text: string;
    tokens: Token[];
  }

  export interface Table {
    type: 'table';
    raw: string;
    align: Array<'center' | 'left' | 'right' | null>;
    header: TableCell[];
    rows: TableCell[][];
  }

  export interface TableRow {
    text: string;
  }

  export interface TableCell {
    text: string;
    tokens: Token[];
    header: boolean;
    align: 'center' | 'left' | 'right' | null;
  }

  export interface Hr {
    type: 'hr';
    raw: string;
  }

  export interface Blockquote {
    type: 'blockquote';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface List {
    type: 'list';
    raw: string;
    ordered: boolean;
    start: number | '';
    loose: boolean;
    items: ListItem[];
  }

  export interface ListItem {
    type: 'list_item';
    raw: string;
    task: boolean;
    checked?: boolean | undefined;
    loose: boolean;
    text: string;
    tokens: Token[];
  }

  export interface Checkbox {
    checked: boolean;
  }

  export interface Paragraph {
    type: 'paragraph';
    raw: string;
    pre?: boolean | undefined;
    text: string;
    tokens: Token[];
  }

  export interface HTML {
    type: 'html';
    raw: string;
    pre: boolean;
    text: string;
    block: boolean;
  }

  export interface Text {
    type: 'text';
    raw: string;
    text: string;
    tokens?: Token[];
  }

  export interface Def {
    type: 'def';
    raw: string;
    tag: string;
    href: string;
    title: string;
  }

  export interface Escape {
    type: 'escape';
    raw: string;
    text: string;
    escaped: boolean;
  }

  export interface Tag {
    type: 'text' | 'html';
    raw: string;
    inLink: boolean;
    inRawBlock: boolean;
    text: string;
    block: boolean;
  }

  export interface Link {
    type: 'link';
    raw: string;
    href: string;
    title?: string | null;
    text: string;
    tokens: Token[];
    escaped: boolean;
  }

  export interface Image {
    type: 'image';
    raw: string;
    href: string;
    title: string | null;
    text: string;
    escaped: boolean;
  }

  export interface Strong {
    type: 'strong';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface Em {
    type: 'em';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface Codespan {
    type: 'codespan';
    raw: string;
    text: string;
    escaped: boolean;
  }

  export interface Br {
    type: 'br';
    raw: string;
  }

  export interface Del {
    type: 'del';
    raw: string;
    text: string;
    tokens: Token[];
  }

  export interface Generic {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;

    type: string;
    raw: string;
    tokens?: Token[] | undefined;
  }
}

export type Links = Record<string, Pick<Tokens.Link | Tokens.Image, 'href' | 'title'>>;

export type TokensList = Token[] & {
  links: Links;
};
