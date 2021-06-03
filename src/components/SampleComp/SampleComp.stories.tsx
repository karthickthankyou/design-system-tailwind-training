import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SampleComp, { ISampleCompProps} from './SampleComp';

export default {
    title: 'components/SampleComp',
    component: SampleComp,
} as Meta;

const Template: Story<ISampleCompProps> = (args) => <SampleComp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
