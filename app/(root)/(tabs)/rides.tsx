import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useState } from "react";
import { useFetch } from "@/lib/fetch";
import { Ride } from "@/types/type";
import { images } from "@/constants";
import RideCard from "@/components/RideCard";

const Rides = () => {
  const { user } = useUser();
  const { data: recentRides, loading } = useFetch<Ride[]>(
    `/(api)/ride/${user?.id}`
  );
  return (
    <SafeAreaView>
      <FlatList
        data={recentRides}
        renderItem={({ item }) => <RideCard ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            {!loading ? (
              <>
                <Image source={images.noResult} className="w-80 h-80" />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size={"small"} color={"#000"} />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <Text className="text-xl font-JakartaBold my-5">Recent Rides</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Rides;
