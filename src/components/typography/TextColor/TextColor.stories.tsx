import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextColor, { ITextColorProps} from './TextColor';

export default {
    title: 'components/typography/TextColor',
    component: TextColor,
} as Meta;

const Template: Story<ITextColorProps> = (args) => <TextColor {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
