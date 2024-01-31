import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../../api/api";

import Navbar from "../../../component/ManageReview/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import ReviewEditForm from "../../../component/ManageReview/Form/ReviewEditForm";
import { BoxsContainer, Container, SubmitButton } from "../styles";

interface IData {
    data: IReview;
}

export interface IReview {
    content: string;
    dogId: String;
    dogTypeName: string;
    gender: string;
    id: String;
    name: string;
    reviewImgId?: IReviewImg[];
    title: string;
    writeDate: string;
}

export interface IReviewImg {
    id: number;
    fileUrl: string;
}

const EditReview = () => {
    const { id } = useParams();
    const [reviewInfo, setReviewInfo] = useState<IReview>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await get<IData>(
                `${process.env.REACT_APP_API_URL}adopter/review/${id}`
            );

            return res.data;
        };

        fetchData()
            .then((res) => {
                setReviewInfo(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <CustomLayout height={1653}>
            <Container>
                <BoxsContainer>
                    <Navbar />
                    <ReviewEditForm review={reviewInfo} />
                </BoxsContainer>
            </Container>
        </CustomLayout>
    );
};

export default EditReview;
