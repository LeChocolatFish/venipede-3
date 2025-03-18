import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text> Meu pokemon favorito </Text>

                <Text>
                Venipede é um Pokémon insetoide com uma protuberância pronunciada na parte superior do corpo. Seu tórax e cabeça são principalmente magenta com manchas pretas que consistem em anéis em seus ombros, uma faixa ao redor de cada antena e um 'Y' de cabeça para baixo em seu pescoço. Uma crista proeminente que desce até uma ponta pontiaguda divide a metade superior de sua cabeça, e sua mandíbula inferior é preta. Ele tem olhos redondos e com pálpebras pesadas que se projetam ligeiramente para longe da cabeça. O abdômen verde-escuro de Venipede é segmentado e tem quatro pares de pernas pretas e atarracadas. Duas antenas curtas com faixas pretas se estendem de seus quartos traseiros, que ele usa além de suas antenas para explorar seus arredores e detectar presas ao sentir vibrações do ar.
                </Text>
                <Text>
                Venipede é brutalmente agressivo, e sua mordida injeta um veneno forte o suficiente para paralisar grandes Pokémon pássaros. Suas presas são conhecidas por serem altamente venenosas. Ele frequentemente entra em brigas com Sizzlipede , uma espécie relacionada. Venipede tende a caçar qualquer Pokémon que ele acha que pode comer sem considerar suas ações completamente.
                </Text>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Tip1')} // Navigate to Tip1 screen
                >
                    <Text style={styles.txtDica}> whirlipede - evolução intermediaria </Text>
                    <Text> Nivél necessário para a evolução: 22 </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Tip2')} // Navigate to Tip2 screen
                >
                    <Text style={styles.txtDica}> Scolipede - evolução final </Text>
                    <Text>nivel necessário para a evolução: 30</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(128,128,128, 0.3)',
        marginBottom: 30,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 10px 20px',
        borderRadius: 23,
    },

    botao: {
        backgroundColor: 'rgba(101, 183, 199, 0.4)',
        borderRadius: 23,
        marginBottom: 35,
        width: '60%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingLeft: 5,
        textAlign: 'center',
        boxShadow: 'rgb(38, 57, 77) 0px 15px 50px -10px',
    },

    txtDica: {
        fontSize: 20,
        fontWeight: '800',
    },
});
