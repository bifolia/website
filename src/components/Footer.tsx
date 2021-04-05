import './Footer.scss'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export const Footer = () => {
  const {
    strapiFooter: { email, tel, address, social },
  } = useStaticQuery<{
    strapiFooter: {
      email: string
      tel: string
      address: {
        line_1: string
        line_2: string | null
        code: number
        city: string
      }
      social: { title: string; url: string }[] | null
    }
  }>(graphql`
    {
      strapiFooter {
        email
        tel
        address {
          city
          code
          line_1
          line_2
        }
        social {
          title
          url
        }
      }
    }
  `)

  return (
    <footer className="Footer">
      <div className="Footer__copyright">
        © bifolia GbR {new Date().getFullYear()}
      </div>
      <div className="Footer__address">
        <h4>bifolia</h4>
        <p>
          {address.line_1}
          <br />
          {address.line_2 && (
            <>
              {address.line_2}
              <br />
            </>
          )}
          {address.code} {address.city}
          <br />
        </p>
      </div>
      <div className="Footer__contact">
        <h4>Kontakt</h4>
        <p>
          {tel}
          <br />
          <a href={`mailto:${email}`}>{email}</a>
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
