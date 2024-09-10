import { Image, Text, View } from "react-native";
import React from "react";
import { Ride } from "@/types/type";
import { formatDate, formatTime } from "@/lib/utils";
import { icons } from "@/constants";

const RideCard = ({
  ride: {
    driver,
    destination_address,
    origin_address,
    ride_time,
    fare_price,
    payment_status,
    created_at,
    destination_latitude,
    destination_longitude,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-col items-start justify-center p-3">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat%3A${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_KEY}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />
          <View className="flex flex-col mx-5 gap-y-5 flex-1">
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.to} className="h-5 w-5" />
              <Text className="text-md font-JakartaSemiBold" numberOfLines={1}>
                {destination_address}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.point} className="h-5 w-5" />
              <Text className="text-md font-JakartaSemiBold" numberOfLines={1}>
                {origin_address}
              </Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg px-3 items-start justify-center">
          <View className="flex flex-row items-center w-full justify-between pt-2 pb-3">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Date & Time
            </Text>
            <Text className="font-JakartaSemiBold">
              {formatDate(created_at)}, {formatTime(ride_time)}
            </Text>
          </View>

          <View className="bg-white w-[90%] h-[1px] mx-auto" />

          <View className="flex flex-row items-center w-full justify-between pt-2 pb-3">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Driver
            </Text>
            <Text className="font-JakartaSemiBold">{driver.first_name}</Text>
          </View>

          <View className="bg-white w-[90%] h-[1px] mx-auto" />

          <View className="flex flex-row items-center w-full justify-between pt-2 pb-3">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Car seats
            </Text>
            <Text className="font-JakartaSemiBold">{driver.car_seats}</Text>
          </View>

          <View className="bg-white w-[90%] h-[1px] mx-auto" />

          <View className="flex flex-row items-center w-full justify-between pt-2 pb-3">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Payment status
            </Text>
            <Text
              className={`text-md font-JakartaBold
            ${payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
