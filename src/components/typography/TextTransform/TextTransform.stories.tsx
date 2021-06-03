import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextTransform, { ITextTransformProps} from './TextTransform';

export default {
    title: 'components/typography/TextTransform',
    component: TextTransform,
} as Meta;

const Template: Story<ITextTransformProps> = (args) => <TextTransform {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
