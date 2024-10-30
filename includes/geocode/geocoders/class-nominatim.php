<?php

namespace Jeo\Geocoders;

class Nominatim extends \Jeo\Geocoder {

	public function geocode($search_string) {

		$params = [
			'q' => $search_string,
			'format' => 'json',
			'addressdetails' => 1
		];

		$r = wp_remote_get( add_query_arg($params, 'https://nominatim.openstreetmap.org/search') );

		$data = wp_remote_retrieve_body( $r );

		$data = \json_decode($data);
		$response = [];

		if (\is_array($data)) {

			foreach ($data as $match) {
				$r = $this->format_response_item( (array) $match );
				if ($r) $response[] = $r;
			}

		}

		return $response;

	}

	public function reverse_geocode($lat, $lon) {

		$params = [
			'lat' => $lat,
			'lon' => $lon,
			'format' => 'json',
			'addressdetails' => 1
		];

		$r = wp_remote_get( add_query_arg($params, 'https://nominatim.openstreetmap.org/reverse') );

		$data = wp_remote_retrieve_body( $r );

		$data = \json_decode($data);

		return $this->format_response_item( (array) $data );

	}

	private function format_response_item($match) {

		if ( isset($match['lat']) && isset($match['lon']) && isset($match['display_name']) )

		$response = [
			'lat' => $match['lat'],
			'lon' => $match['lon'],
			'full_address' => $match['display_name'],
		];

		/**
		 * See https://github.com/OpenCageData/address-formatting/blob/master/conf/components.yaml
		 * See https://github.com/openstreetmap/Nominatim/blob/6c1977b448e8b195bf96b6144674ffe0527e79de/lib/lib.php#L63
		 * for all possible values
		 */
		$correspondences = [
			'country' => [
				'country',
				'country_name'
			],
			'region_level_1' => [
				'region'
			],
			'region_level_2' => [
				'state',
				'state_code',
				'province'
			],
			'region_level_3' => [
				'state_district',
				'county',
				'local_administrative_area',
				'county_code'
			],
			'city' => [
				'city',
				'town',
				'municipality'
			],
			'city_level_1' => [
				'neighbourhood',
				'suburb',
				'city_district',
				'district',
				'quarter',
				'houses',
				'subdivision',
				'village',
				'hamlet',
				'locality',
				'croft'
			]
		];

		foreach ( $correspondences as $jeo_field => $nominatim_fields ) {

			foreach ( $nominatim_fields as $field ) {
				if ( isset($match['address']->$field) ) {
					$response[$jeo_field] = $match['address']->$field;
					break;
				}
			}

		}

		$response['raw'] = $match;

		return $response;

	}

}

