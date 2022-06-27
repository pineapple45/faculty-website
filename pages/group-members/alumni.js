import React from 'react';
import Card from '../../components/Card';
import { Row, Col, Container } from 'react-bootstrap';
import Seo from '../../components/Seo';
import { generateClient } from '../../lib/contentfulClient';
import { transformedContent, sortDescending } from '../../lib/utils';

export default function Alumni({ content = [] }) {
  content = transformedContent(content);
  const dict = {};

  sortDescending(content).forEach((t) => {
    if (!dict[t.enrolledProgram]) {
      dict[t.enrolledProgram] = [t];
    } else {
      dict[t.enrolledProgram].push(t);
    }
  });

  console.log(dict);

  return (
    <>
      <Seo title='Alumni' description='Alumni under Dr. Rupesh S. Devan' />
      <div>
        {Object.keys(dict) &&
          Object.keys(dict).map((k) => {
            return (
              <Container key={k} className='my-3'>
                <h4>{k}</h4>
                <hr />
                <Row xs={1} md={2} lg={3} className='g-4'>
                  {dict[k].map((v) => (
                    <Col key={content.id}>
                      <Card content={v} />
                    </Col>
                  ))}
                </Row>
              </Container>
            );
          })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();

  const entries = await client.getEntries({
    content_type: 'alumni',
  });

  return {
    props: {
      content: entries.items,
    },
    revalidate: 1,
  };
};
