import * as React from 'react';

interface IProps extends React.PropsWithChildren {
    isOpen: boolean;
    toggleDialog: () => void;
}

const Dialog = ({ isOpen, toggleDialog, children }: IProps) => {
    return (
        <>
            {isOpen && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`}
                >
                    <div
                        className={`relative w-[367px] rounded-lg bg-white py-[56px] shadow-lg`}
                    >
                        <span className={`absolute right-3 top-3`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                className={`cursor-pointer fill-primary`}
                                onClick={toggleDialog}
                            >
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </span>

                        <div className="p-4">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export { Dialog };
