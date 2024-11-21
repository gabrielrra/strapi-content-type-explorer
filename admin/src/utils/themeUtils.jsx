import React from 'react';
import { darkTheme } from '@strapi/design-system';

import {
  Paragraph,
  Mail,
  Lock,
  Hashtag,
  BulletList,
  Calendar,
  File,
  Check,
  Code,
  SquaresFour,
  Key,
  OneToMany,
  OneToOne,
  ManyToMany,
  ManyToOne,
  OneWay,
  ManyWays,
} from '@strapi/icons';

export function getBackgroundColor(variant, theme) {
  switch (variant) {
    case 'cross':
      return theme.colors.neutral200;
    case 'dots':
      return darkTheme.colors.neutral300;
    case 'lines':
      return theme.colors.neutral150;
    case 'none':
      return theme.colors.neutral100;
  }
}

export function getIcon(attrType) {
  switch (attrType.toLowerCase()) {
    case 'string':
    case 'text':
    case 'richtext':
      return <Paragraph />;
    case 'email':
      return <Mail />;
    case 'enumeration':
      return <BulletList />;
    case 'password':
      return <Lock />;
    case 'boolean':
      return <Check />;
    case 'datetime':
    case 'date':
    case 'time':
      return <Calendar />;
    case 'integer':
    case 'decimal':
    case 'biginteger':
    case 'float':
      return <Hashtag />;
    case 'json':
      return <Code />;
    case 'uid':
      return <Key />;
    case 'media':
      return <File />;
    case 'blocks':
      return <SquaresFour />;

    case 'onetomany': //
      return <OneToMany />;
    case 'oneway':
      return <OneWay />;
    case 'relation':
    case 'onetoone': //
      return <OneToOne />;
    case 'manytomany': //
      return <ManyToMany />;
    case 'manytoone': //
      return <ManyToOne />;
    case 'manyways':
      break;
    case 'morphtomany':
      return <ManyWays />;
  }
}
