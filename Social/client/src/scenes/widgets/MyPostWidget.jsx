import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
} from "@mui/icons-material";
import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";


const MyPostWidget = ({ picturePath }) => {
    const dispatch = useDispatch();
    // The isImage represents the switch of if the user wants to drop an image or not
    // and the image represents the image actually being uploaded or not.
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    // This represents the actual post content.
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    // This _id represents the person posting info which will be identified by the backend.
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;

    const handlePost = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);
        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);
        }
    }

    return (
        <div>MyPostWidget</div>
    )
}

export default MyPostWidget