
    import React, { ChangeEvent } from 'react';
    import TextField from "@mui/material/TextField";
    import { styled } from '@mui/system';
    
    interface TextInputProps {
        // ?はOptional Chaining（オプショナルチェイニング）と呼ばれる TypeScript の機能です。
    // これは、プロパティが undefined もしくは null の場合でも、エラーを発生させずにプロパティにアクセスできるようにするものです。
    // ここのプロパティを設定して使う
        fullWidth?: boolean;
        label: string;
        multiline?: boolean;
        required?: boolean;
        rows?: number;
        value: string;
        type?: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    }
    
    const StyledTextField = styled(TextField)<{ fullWidth?: boolean }>`
        margin-bottom: 16px;
        ${({ fullWidth }) => fullWidth ? '' : `
            margin-left: 8px;
            margin-right: 8px;
            min-width: 130px;
            width: calc(50% - 16px);
        `}
    `;
    
    const TextInput: React.FC<TextInputProps> = (props) => {
        return (
            <StyledTextField
                fullWidth={props.fullWidth}
                label={props.label}
                margin="dense"
                multiline={props.multiline}
                required={props.required}
                rows={props.rows}
                value={props.value}
                type={props.type}
                onChange={props.onChange}
            />
        );
    };
    
    export default TextInput;
    