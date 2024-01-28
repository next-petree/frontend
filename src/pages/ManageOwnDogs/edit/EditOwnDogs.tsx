import Navbar from "../../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import OwnDogsForm, { IDogInfo } from "../../../component/ManageOwnDogs/Form/OwnDogsForm";
import { BoxsContainer, Container, SubmitButton } from "../styles";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { IData } from "../../../component/ManageOwnDogs/Form/OwnDogsForm";
import { get } from "../../../api/api";

const EditOwnDogs = () => {
    const { id } = useParams();
    const [dog, setDog] = useState<IDogInfo>();
    useEffect(() => {
        const getDogById = async () => {
            const res = await get<IData>(`${process.env.REACT_APP_API_URL}/breeder/dogs/${id}`);
            setDog(res.data.data);
        }
        getDogById();
    }, [id]);
    return (
        <CustomLayout height={1653}>
            <Container>
                <BoxsContainer>
                    <Navbar />
                    <OwnDogsForm dog={dog} />
                </BoxsContainer>
                <SubmitButton>저장</SubmitButton>
            </Container>
        </CustomLayout>
    );
};

export default EditOwnDogs;
