import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCreate } from '../../../features/job/jobSlice';

const QuillEditorRoot = styled('div')(({ theme }) => ({
    border: 1,
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '& .quill': {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        overflow: 'hidden',
    },
    '& .ql-snow.ql-toolbar': {
        borderColor: theme.palette.divider,
        borderLeft: 'none',
        borderRight: 'none',
        borderTop: 'none',
        '& .ql-picker-label:hover': {
            color: theme.palette.primary.main,
        },
        '& .ql-picker-label.ql-active': {
            color: theme.palette.primary.main,
        },
        '& .ql-picker-item:hover': {
            color: theme.palette.primary.main,
        },
        '& .ql-picker-item.ql-selected': {
            color: theme.palette.primary.main,
        },
        '& button:hover': {
            color: theme.palette.primary.main,
            '& .ql-stroke': {
                stroke: theme.palette.primary.main,
            },
        },
        '& button:focus': {
            color: theme.palette.primary.main,
            '& .ql-stroke': {
                stroke: theme.palette.primary.main,
            },
        },
        '& button.ql-active': {
            '& .ql-stroke': {
                stroke: theme.palette.primary.main,
            },
        },
        '& .ql-stroke': {
            stroke: theme.palette.text.primary,
        },
        '& .ql-picker': {
            color: theme.palette.text.primary,
        },
        '& .ql-picker-options': {
            backgroundColor: theme.palette.background.paper,
            border: 'none',
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[10],
            padding: theme.spacing(2),
        },
    },
    '& .ql-snow.ql-container': {
        borderBottom: 'none',
        borderColor: theme.palette.divider,
        borderLeft: 'none',
        borderRight: 'none',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: 'auto',
        overflow: 'hidden',
        '& .ql-editor': {
            color: theme.palette.text.primary,
            flex: 1,
            fontFamily: theme.typography.body1.fontFamily,
            fontSize: theme.typography.body1.fontSize,
            height: 'auto',
            overflowY: 'auto',
            padding: theme.spacing(2),
            '&.ql-blank::before': {
                color: theme.palette.text.secondary,
                fontStyle: 'normal',
                left: theme.spacing(2),
            },
        },
    },
}));

export default function QuillEditor(props) {
    const { sx, ...other } = props;
    const ref = useRef(null);
    const dispatch = useDispatch();
    const description = useSelector((state) => state.job.create.description);

    const handleChange = (value) => {
        dispatch(setCreate({ name: 'description', value }));
    };

    return (
        <QuillEditorRoot sx={sx} ref={ref} {...other}>
            <Quill onChange={handleChange} value={description} placeholder="Write something" />
        </QuillEditorRoot>
    );
}

QuillEditor.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    sx: PropTypes.object,
    value: PropTypes.string,
};
