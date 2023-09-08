import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const Container = styled(motion.div)`
  display: flex;
  width: max-content;
  min-width: 1342px;
  padding: 1.25rem 2.75rem;
  justify-content: flex-start;
  align-items: center;
  gap: 7.5rem;
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0px 14px 20px 0px rgba(58, 58, 58, 0.08);
`;

const Image = styled.img`
  width: 11.125rem;
  height: 11.125rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  h3 {
    margin: 0;
    color: #000;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

interface CardProps {
  title: string;
  description: React.ReactNode;
  image: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <Container
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.75 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <Image src={image} alt="image" />
      <TitleContainer>
        <h3>{title}</h3>
        {description}
      </TitleContainer>
    </Container>
  );
}

Card.Span = styled.span`
  line-height: normal;
  color: #333;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
`;
