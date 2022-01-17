import './Footer.scss'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export const Footer = () => {
  const {
    strapiFooter: {
      data: {
        attributes: { email, tel, address, tax_id, social },
      },
    },
  } = useStaticQuery<{
    strapiFooter: {
      data: {
        attributes: {
          email: string
          tel: string
          address: {
            title: string
            line_1: string
            line_2: string | null
            line_3: string | null
            code: number
            city: string
          }
          tax_id: string | null
          social: { title: string; url: string }[] | null
        }
      }
    }
  }>(graphql`
    {
      strapiFooter {
        data {
          attributes {
            email
            tel
            address {
              title
              line_1
              line_2
              line_3
              code
              city
            }
            tax_id
            social {
              title
              url
            }
          }
        }
      }
    }
  `)

  return (
    <footer className="Footer">
      <div className="Footer__copyright">
        © bifolia GbR {new Date().getFullYear()}
        <br />
        <Link to="/datenschutz">Datenschutz</Link>
      </div>
      <div className="Footer__address">
        <h4>{address.title}</h4>
        <p>
          {address.line_1}
          <br />
          {address.line_2 && (
            <>
              {address.line_2}
              <br />
            </>
          )}
          {address.line_3 && (
            <>
              {address.line_3}
              <br />
            </>
          )}
          {address.code} {address.city}
          <br />
        </p>
        {tax_id && <p>USt-IdNr. {tax_id}</p>}
      </div>
      <div className="Footer__contact">
        <h4>Kontakt</h4>
        <p>
          Telefon {tel}
          <br />
          Email <a href={`mailto:${email}`}>{email}</a>
          <br />
        </p>
        {social && social.length > 0 && (
          <p>
            {social.map(({ title, url }, i) => (
              <span key={i}>
                <a href={url} target="_blank" rel="noreferrer">
                  {title}
                </a>
                <br />
              </span>
            ))}
          </p>
        )}
      </div>
    </footer>
  )
}
