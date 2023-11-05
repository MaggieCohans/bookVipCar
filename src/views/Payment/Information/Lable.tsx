import { View } from 'react-native'
import React from 'react'
import { NormalText } from '../../../components/Text'
import { styles } from '../styles'

interface LableProps {
    content: string,
    important?: boolean
}

export default function Lable({ content, important }: LableProps) {
    return <View style={styles.lable}>
        <NormalText content={content} style={styles.lableText} />
        {important && <NormalText content=' *' color='red' />}
    </View>
}