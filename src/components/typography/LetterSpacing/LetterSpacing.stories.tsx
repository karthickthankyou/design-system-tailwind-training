import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import LetterSpacing, { ILetterSpacingProps} from './LetterSpacing';

export default {
    title: 'components/typography/LetterSpacing',
    component: LetterSpacing,
} as Meta;

const Template: Story<ILetterSpacingProps> = (args) => <LetterSpacing {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
