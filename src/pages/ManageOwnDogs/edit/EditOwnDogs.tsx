import Navbar from "../../../component/MyPage/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import OwnDogsEditForm, { IDogInfo } from "../../../component/ManageOwnDogs/Form/OwnDogsEditForm";
import { BoxsContainer, Container, SubmitButton } from "../styles";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import { IData } from "../../../component/ManageOwnDogs/Form/OwnDogsEditForm";
import { get } from "../../../api/api";

const EditOwnDogs = () => {
    const { id } = useParams();
    const [dog, setDog] = useState<IDogInfo>();

    useEffect(() => {
        const getDogById = async () => {
            const res = await get<IData>(`${process.env.REACT_APP_API_URL}breeder/dogs/${id}`);
            setDog(res.data.data);
            console.log("res.data.data: ", res.data.data);
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
