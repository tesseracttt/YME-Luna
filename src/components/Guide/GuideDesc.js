import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
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
                            src="https://picsum.photos/id/233/500/300"
                        />
                    </Grid.Col>
                    <Grid.Col xs={8}>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.Nulla vitae elit libero, a pharetra augue
                            mollis interdum.Nulla vitae elit libero, a pharetra
                            augue mollis interdum.Nulla vitae elit libero, a
                            pharetra augue mollis interdum.Nulla vitae elit
                            libero, a pharetra augue mollis interdum.Nulla vitae
                            elit libero, a pharetra augue mollis interdum.Nulla
                            vitae elit libero, a pharetra augue mollis
                            interdum.Nulla vitae elit libero, a pharetra augue
                            mollis interdum.Nulla vitae elit libero, a pharetra
                            augue mollis interdum.Nulla vitae elit libero, a
                            pharetra augue mollis interdum.Nulla vitae elit
                            libero, a pharetra augue mollis interdum.Nulla vitae
                            elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Grid.Col>
                </Grid.Row>
            </Container>
        </GuideDescContainer>
    );
};

export default GuideDesc;
