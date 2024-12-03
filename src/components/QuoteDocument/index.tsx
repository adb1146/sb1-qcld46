import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Quote } from '../../types';
import { format } from 'date-fns';
import { formatCurrency } from '../../utils/formatters';
import { Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf' },
    { 
      src: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc9.ttf',
      fontWeight: 'bold'
    }
  ]
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
  },
  logo: {
    width: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#f3f4f6',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: 150,
    fontSize: 12,
    color: '#666',
  },
  value: {
    flex: 1,
    fontSize: 12,
  },
  premium: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f3f4f6',
  },
  premiumText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#666',
  },
});

interface QuoteDocumentProps {
  quote: Quote;
}

export function QuoteDocument({ quote }: QuoteDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQyIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTQyIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNS40MTY3IDQuODQyMTZWNS4yNDE5QzE1LjQxNjkgNS41OTQ5OCAxNS4zNDc0IDUuOTQ0NjQgMTUuMjEyNCA2LjI3MDg5QzE1LjA3NzQgNi41OTcxNCAxNC44Nzk0IDYuODkzNiAxNC42Mjk4IDcuMTQzMzJDMTQuMzgwMiA3LjM5MzA0IDE0LjA4MzggNy41OTExNCAxMy43NTc2IDcuNzI2MjlDMTMuNDMxNCA3Ljg2MTQ1IDEzLjA4MTggNy45MzEwMSAxMi43Mjg3IDcuOTMxMDFIOC43MjM2NkM3Ljc3Mzk3IDcuOTMxMDEgNi44NjMxIDguMzA3ODkgNi4xOTEwNiA4Ljk3ODkxQzUuNTE5MDIgOS42NDk5MiA1LjE0MDczIDEwLjU2MDIgNS4xMzkyNyAxMS41MDk5VjE0LjA5OTlDNS4xMzk0MiAxNC41NzA4IDUuMDQ2NzggMTUuMDM3MSA0Ljg2NjY0IDE1LjQ3MjJDNC42ODY1IDE1LjkwNzMgNC40MjI0IDE2LjMwMjYgNC4wODk0MyAxNi42MzU1QzMuNzU2NDYgMTYuOTY4NSAzLjM2MTE0IDE3LjIzMjYgMi45MjYwNiAxNy40MTI3QzIuNDkwOTkgMTcuNTkyOSAyLjAyNDY4IDE3LjY4NTUgMS41NTM3OSAxNy42ODU0SDAuMTc4Mzk3QzAuMTU0ODc3IDE3LjY4NTQgMC4xMzE1ODkgMTcuNjgwNyAwLjEwOTg3MyAxNy42NzE3QzAuMDg4MTU3NSAxNy42NjI3IDAuMDY4NDQyNSAxNy42NDk0IDAuMDUxODYyNyAxNy42MzI3QzAuMDM1MjgyOCAxNy42MTYxIDAuMDIyMTY1NSAxNy41OTYzIDAuMDEzMjY1NCAxNy41NzQ1QzAuMDA0MzY1MzMgMTcuNTUyNyAtMC4wMDAxNDE3ODUgMTcuNTI5NCAzLjM5OTA3ZS0wNiAxNy41MDU5VjguNDI2NTVDMC4wMDAyOTUyOTIgNy40NzYgMC4zNzgwMjggNi41NjQ0NyAxLjA1MDE3IDUuODkyMzNDMS43MjIzMSA1LjIyMDE5IDIuNjMzODQgNC44NDI0NSAzLjU4NDM5IDQuODQyMTZIMTUuNDE2N1oiIGZpbGw9IiMyOTcwRkYiLz48cGF0aCBkPSJNMTUuNDE2NyA5LjU2OTU4VjE4LjgyNzNDMTUuNDE2NyAxOS43NzggMTUuMDM5MSAyMC42ODk3IDE0LjM2NjkgMjEuMzYxOUMxMy42OTQ3IDIyLjAzNDEgMTIuNzgzIDIyLjQxMTcgMTEuODMyMyAyMi40MTE3SDMuMjkwMzdDMy4yMzUzNiAyMi40MTIgMy4xODI3IDIyLjQzNCAzLjE0MzkxIDIyLjQ3M0MzLjEwNTEyIDIyLjUxMiAzLjA4MzM0IDIyLjU2NDggMy4wODMzNCAyMi42MTk4VjIyLjYxOThDMy4wODMzNCAyMi45NzAzIDIuOTQ0MTIgMjMuMzA2NCAyLjY5NjMgMjMuNTU0MkMyLjQ0ODQ5IDIzLjgwMiAyLjExMjM4IDIzLjk0MTMgMS43NjE5MSAyMy45NDEzSDAuMTc4MzkzQzAuMTMxMjcxIDIzLjk0MTMgMC4wODYwNjE3IDIzLjkyMjYgMC4wNTI2Mzc5IDIzLjg4OTRDMC4wMTkyMTQyIDIzLjg1NjIgMC4wMDAyOTA4ODEgMjMuODExMSAwIDIzLjc2NEwwIDIwLjIyNThDMCAxOS45ODgxIDAuMDk0NDM4OSAxOS43NjAxIDAuMjYyNTQxIDE5LjU5MkMwLjQzMDY0MyAxOS40MjM5IDAuNjU4NjM5IDE5LjMyOTUgMC44OTYzNzEgMTkuMzI5NUg2LjY5MzA1QzcuNjQzOTggMTkuMzI5NSA4LjU1NTk3IDE4Ljk1MTcgOS4yMjgzOCAxOC4yNzkzQzkuOTAwNzggMTcuNjA2OSAxMC4yNzg1IDE2LjY5NDkgMTAuMjc4NSAxNS43NDRWMTMuMTU1MUMxMC4yNzg0IDEyLjY4NDMgMTAuMzcxIDE2LjIxOCAxMC41NTExIDExLjc4M0MxMC43MzExIDExLjM0OCAxMC45OTUxIDEwLjk1MjggMTEuMzI4IDEwLjYxOThDMTEuNjYwOCAxMC4yODY5IDEyLjA1NiAxMC4wMjI3IDEyLjQ5MSA5Ljg0MjUzQzEyLjkyNTkgOS42NjIzMyAxMy4zOTIxIDkuNTY5NTggMTMuODYyOSA5LjU2OTU4SDE1LjQxNjdaIiBmaWxsPSIjMjk3MEZGIi8+PC9zdmc+"
            style={styles.logo}
          />
          <Text style={styles.title}>Workers' Compensation Insurance Quote</Text>
          <Text style={styles.subtitle}>Quote Number: {quote.quoteNumber}</Text>
          <Text style={styles.subtitle}>Generated: {format(new Date(quote.createdAt), 'MMMM d, yyyy')}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Information</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Business Name:</Text>
            <Text style={styles.value}>{quote.businessInfo.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>FEIN:</Text>
            <Text style={styles.value}>{quote.businessInfo.fein}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Entity Type:</Text>
            <Text style={styles.value}>{quote.businessInfo.entityType}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Years in Business:</Text>
            <Text style={styles.value}>{quote.businessInfo.yearsInBusiness}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Coverage Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Effective Date:</Text>
            <Text style={styles.value}>{format(new Date(quote.effectiveDate), 'MMMM d, yyyy')}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Expiration Date:</Text>
            <Text style={styles.value}>{format(new Date(quote.expirationDate), 'MMMM d, yyyy')}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Premium Summary</Text>
          <View style={styles.premium}>
            <View style={styles.row}>
              <Text style={styles.label}>Total Annual Premium:</Text>
              <Text style={styles.premiumText}>{formatCurrency(quote.premium)}</Text>
            </View>
          </View>
        </View>

        {quote.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional Notes</Text>
            <Text style={styles.value}>{quote.notes}</Text>
          </View>
        )}

        <View style={styles.footer}>
          <Text>This quote is valid until {format(new Date(quote.expirationDate), 'MMMM d, yyyy')}</Text>
          <Text>Generated by PS Advisory Workers' Compensation Insurance Rating System</Text>
        </View>
      </Page>
    </Document>
  );
}