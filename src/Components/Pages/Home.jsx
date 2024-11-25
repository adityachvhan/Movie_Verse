import Card from 'react-bootstrap/Card';
import { data } from '../moviedata';

function Home() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', padding: '1rem' }}>
            {data.map((item, index) => (
                <Card
                    key={index}
                    style={{
                        width: '14rem',
                        backgroundColor: '#000', // Black background
                        color: '#fff', // White text
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        <Card.Img
                            variant="top"
                            src={item.imgurl}
                            alt={item.title}
                            style={{
                                height: '12rem',
                                objectFit: 'cover',
                                borderBottom: '3px solid #00FF00', // Green border below the image
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                backgroundColor: '#FF0000', // Red label background
                                color: '#fff',
                                padding: '0.2rem 0.4rem',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                            }}
                        >
                            {item.audio}
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' }}>{item.title}</Card.Title>
                        <Card.Text style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                            <strong>Release:</strong> {item.releaseYear}
                            <br />
                            <strong>Resolutions:</strong>
                            <ul style={{ padding: '0', listStyleType: 'none', textAlign: 'left' }}>
                                <li>480p: {item.resolutions["480p"]}</li>
                                <li>720p: {item.resolutions["720p"]}</li>
                                <li>1080p: {item.resolutions["1080p"]}</li>
                                <li>2160p: {item.resolutions["2160p"]}</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Home;
