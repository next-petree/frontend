import Navbar from "../../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import OwnDogsForm from "../../../component/ManageOwnDogs/Form/OwnDogsForm";
import { BoxsContainer, Container, SubmitButton } from "../styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../../api/api";

export interface IDogInfo {
    birthDate: string;
    dogImgUrl: string[];
    dogType: string;
    gender: string;
    id: number;
    management: string;
    name: string;
    status: string;
}

interface IData {
    status: string;
    data: IDogInfo;
}

const EditOwnDogs = () => {
    const { id } = useParams();
    const [dogInfo, setDogInfo] = useState<IDogInfo>();

    useEffect(() => {
        const fetchData = async () => {
            const res = await get<IData>(
                `${process.env.REACT_APP_API_URL}/breeder/dogs/${id}`
            );

            return res.data;
        };

        fetchData()
            .then((res) => {
                setDogInfo(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <CustomLayout height={1653}>
            <Container>
                <BoxsContainer>
                    <Navbar />
                    <OwnDogsForm dog={dogInfo} />
                </BoxsContainer>
                <SubmitButton>저장</SubmitButton>
            </Container>
        </CustomLayout>
    );
};

export default EditOwnDogs;
