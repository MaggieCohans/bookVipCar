import { View, StyleSheet } from 'react-native'
import React from 'react'
import { NormalText } from '../Text'
import { COLORS } from '../../common'

type RatingProps = {
      stars: number;
}

export default function Rating({ stars }: RatingProps) {
      return (
            <View style={{ flexDirection: 'row' }}>
                  <NormalText
                        content={Array(stars).fill('★').join('')}
                        style={styles.starRating}
                  />
                  <NormalText
                        content={Array(5 - stars)
                              .fill('★')
                              .join('')}
                        style={[styles.starRating, { color: '#ccc' }]}
                  />
            </View>
      )
}

const styles = StyleSheet.create({
      starRating: {
            color: COLORS.primary,
            lineHeight: 20,
            marginBottom: 10
      }
})