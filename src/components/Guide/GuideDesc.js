import React from "react";
import { Container, Grid, GalleryCard } from "tabler-react";
import styled from "styled-components";

export const GuideDescContainer = styled.div`
    margin: 10px;
`;

const GuideDesc = ({ title }) => {
    return (
        <GuideDescContainer>
            <Container>
                <Grid.Row>
                    <h3>{title}</h3>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col>
                        <GalleryCard.Image
                            alt="171x180"
                            src="https://i0.wp.com/sebenarnya.my/wp-content/uploads/2021/08/Green-and-White-Zero-Waste-Living-Nature-or-Environmental-Causes-Education-Presentation-1.png"
                        />
                    </Grid.Col>
                    <Grid.Col xs={8}>
                        <>
                            <h3>SEBENARNYA:</h3>
                            <h5>
                                Menurut Jabatan Kesihatan Negeri (JKN) Pulau
                                Pinang:
                            </h5>
                            <p>
                                Berita palsu telah disebarkan menerusi aplikasi
                                WhatsApp dengan menyatakan bahawa ; “…Bagi
                                Penduduk di Butterworth dan Bukit Mertajam yang
                                ingin mendapatkan suntikan Vaksin Sinovac yang
                                berharga RM225.00 (2 Dos) boleh menghubungi…”
                                Mesej yang ditularkan dalam aplikasi WhatsApp
                                ini adalah tidak benar. Dimohon untuk tidak
                                menyebarkan berita palsu seperti ini. Pihak yang
                                bertanggungjawab menyebarkan berita palsu ini
                                boleh dikenakan tindakan yang sewajarnya kerana
                                menyebarkan berita yang tidak benar di media
                                sosial.
                            </p>
                        </>
                    </Grid.Col>
                </Grid.Row>
            </Container>
        </GuideDescContainer>
    );
};

export default GuideDesc;
