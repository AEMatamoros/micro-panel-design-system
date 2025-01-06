import React from 'react';

import {
    InputOTP,
    InputOTPSlot,
    InputOTPGroup,
    InputOTPSeparator
} from '../ui/input-otp';

const theme = import.meta.env.VITE_APP_THEME;

const meta = {
    title: 'Base/Input OTP',
    component: InputOTP,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;

export const Base = {
    args: { capture: 'environment' },
    decorators: [
        (StoryE: React.FC) => (
            <div className={theme}>
                <StoryE />
            </div>
        )
    ],
    render: () => (
        <InputOTP maxLength={6}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
        </InputOTP>
    )
};
