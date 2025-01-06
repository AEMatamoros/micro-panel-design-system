import React from 'react';

import { render, screen } from '@testing-library/react';

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator
} from '../ui/input-otp';

describe('InputOTP Components', () => {
    test('renders InputOTPGroup with correct classes', () => {
        render(
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
                Item
            </InputOTP>
        );

        expect(screen.getByText('Item')).toBeInTheDocument();
    });
});
