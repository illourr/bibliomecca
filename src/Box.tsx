import React from 'react';
import styled from 'styled-components';
import {
  typography,
  space,
  color,
  TypographyProps,
  ColorProps,
  SpaceProps
} from 'styled-system';

export type BoxProps =
  | TypographyProps
  | SpaceProps
  | ColorProps
  | {
      as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    };

export default styled('div')(typography, space, color);
