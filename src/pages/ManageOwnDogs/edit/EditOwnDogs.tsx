import Navbar from "../../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import OwnDogsEditForm, { IGender, IStatus } from "../../../component/ManageOwnDogs/Form/OwnDogsEditForm";
import { BoxsContainer, Container, SubmitButton } from "../styles";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { get } from "../../../api/api";

export interface IDogEditInfo {
    birthDate: string;
    dogImgUrl: string[];
    dogType: string;
    gender: string;
    id: number;
    management: string;
    name: string;
    status: string;
}

export interface IData {
    status: string;
    data: IDogEditInfo;
}

const EditOwnDogs = () => {
    const { id } = useParams();
    const [dog, setDog] = useState<IDogEditInfo>();

    useEffect(() => {
        const getDogById = async () => {
            const res = await get<IData>(`${process.env.REACT_APP_API_URL}breeder/dogs/${id}`);
            setDog({
                name: res.data.data.name,
                id: res.data.data.id,
                dogType: res.data.data.dogType,
                dogImgUrl: res.data.data.dogImgUrl,
                birthDate: res.data.data.birthDate,
                management: res.data.data.management,
                status: res.data.data.status,
                gender: res.data.data.gender,
            });
        }
        getDogById();
    }, [id]);



    return (
        <CustomLayout height={1653}>
            <Container>
                <BoxsContainer>
                    <Navbar />
                    <OwnDogsEditForm dog={dog} />
                </BoxsContainer>
            </Container>
        </CustomLayout>
    );
};

export default EditOwnDogs;
