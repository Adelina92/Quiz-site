import { Button, Card, Row, Col, Typography} from "antd";
const { Title, Text } = Typography;
import styles from "./QuizCard.module.css";

export type QuizCardProps = {
    title: string; text:string; src: string;
}

export const QuizCard = ({ title, text, src }: QuizCardProps) => {
    return (
        <Row>
        <Col>
        <Title> {title} </Title>
        <Text> {text} </Text>
            <Card className={styles.customCard} cover={<img src={src}/>}>
            <Button className={styles.buttonWithGap}>Button One</Button>
            <Button className={styles.buttonWithGap}>Button Two</Button>
            <Button className={styles.buttonWithGap}>Button Three</Button>
            <Button className={styles.buttonWithGap}>Button Four</Button>
          </Card>
        </Col>
      </Row>
    );
}