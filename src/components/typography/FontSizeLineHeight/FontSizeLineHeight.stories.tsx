import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import FontSizeLineHeight, { IFontSizeLineHeightProps} from './FontSizeLineHeight';

export default {
    title: 'components/typography/FontSizeLineHeight',
    component: FontSizeLineHeight,
} as Meta;

const Template: Story<IFontSizeLineHeightProps> = (args) => <FontSizeLineHeight {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
